export function scrollToSection(id: string) {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  scrollToSection("#hero");
}
