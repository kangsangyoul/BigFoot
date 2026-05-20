import { extractNormalizedSkills } from "@/lib/skill-normalizer";

export type ExtractedSignals = {
  techTags: string[];
  normalizedSkills: string[];
  industries: string[];
  roles: string[];
};

const techDictionary = ["Java", "Spring", "Oracle", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Kafka", "API"];
const industryDictionary = ["금융", "은행", "보험", "커머스", "리테일", "공공", "제조"];
const roleDictionary = ["백엔드", "프론트엔드", "풀스택", "PM", "PL", "데이터", "DevOps", "모바일"];

function pickMatches(text: string, dictionary: string[]) {
  const normalized = text.toLowerCase();
  return dictionary.filter((word) => normalized.includes(word.toLowerCase()));
}

export function extractSignals(text: string): ExtractedSignals {
  return {
    techTags: pickMatches(text, techDictionary),
    normalizedSkills: extractNormalizedSkills(text),
    industries: pickMatches(text, industryDictionary),
    roles: pickMatches(text, roleDictionary)
  };
}

export function cosineSimilarity(left: number[], right: number[]) {
  if (left.length !== right.length || left.length === 0) return 0;

  const dot = left.reduce((sum, value, index) => sum + value * right[index], 0);
  const leftMagnitude = Math.sqrt(left.reduce((sum, value) => sum + value * value, 0));
  const rightMagnitude = Math.sqrt(right.reduce((sum, value) => sum + value * value, 0));

  if (leftMagnitude === 0 || rightMagnitude === 0) return 0;
  return dot / (leftMagnitude * rightMagnitude);
}

export function calculateFitScore(input: {
  techSimilarity: number;
  industryMatched: boolean;
  yearsMatched: boolean;
  locationMatched: boolean;
  availableNow: boolean;
}) {
  const score =
    input.techSimilarity * 55 +
    (input.industryMatched ? 15 : 0) +
    (input.yearsMatched ? 10 : 0) +
    (input.locationMatched ? 10 : 0) +
    (input.availableNow ? 10 : 0);

  return Math.min(99, Math.round(score));
}
