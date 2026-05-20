export type NormalizedSkill = {
  canonical: string;
  label: string;
  aliases: string[];
};

export const normalizedSkills: NormalizedSkill[] = [
  { canonical: "spring_boot", label: "Spring Boot", aliases: ["springboot", "spring boot", "스프링부트"] },
  { canonical: "spring", label: "Spring", aliases: ["spring", "스프링"] },
  { canonical: "java", label: "Java", aliases: ["java", "자바"] },
  { canonical: "oracle", label: "Oracle", aliases: ["oracle", "오라클"] },
  { canonical: "postgresql", label: "PostgreSQL", aliases: ["postgres", "postgresql", "포스트그레스"] },
  { canonical: "api", label: "API", aliases: ["api", "rest api", "인터페이스"] },
  { canonical: "mci", label: "MCI", aliases: ["mci", "대외계", "채널계"] }
];

export function normalizeSkill(input: string) {
  const normalized = input.trim().toLowerCase().replace(/[\s_-]+/g, " ");
  const found = normalizedSkills.find((skill) =>
    skill.aliases.some((alias) => alias.toLowerCase().replace(/[\s_-]+/g, " ") === normalized)
  );

  return found?.canonical ?? normalized.replace(/\s+/g, "_");
}

export function extractNormalizedSkills(text: string) {
  const lowerText = text.toLowerCase();

  return normalizedSkills
    .filter((skill) => skill.aliases.some((alias) => lowerText.includes(alias.toLowerCase())))
    .map((skill) => skill.canonical);
}
