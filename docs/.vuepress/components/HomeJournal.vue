<script setup lang="ts">
import { VPHomeBox } from 'vuepress-theme-plume/client'
</script>

<template>
  <VPHomeBox class="home-journal">
    <section class="journal-cover" aria-labelledby="journal-title">
      <div class="journal-masthead">
        <span>PHYSNYA'S JOURNAL</span>
        <span>Blog &amp; Notes · EST. 2024</span>
      </div>

      <div class="journal-body">
        <div class="journal-intro">
          <p class="journal-kicker">物理 · 生活 · 一些思考</p>
          <h1 id="journal-title">菲兹克斯喵<span class="journal-seal" aria-hidden="true">手记</span></h1>
          <p class="journal-subtitle">Blog <em>&amp;</em> Notes</p>
          <p class="journal-description">在这里分享生活，整理学习笔记，<br class="desktop-break" />也记录对这个世界的好奇。</p>
          <nav class="journal-actions" aria-label="开始阅读">
            <a class="journal-primary" href="/blog/">翻开博客 <span aria-hidden="true">↗</span></a>
            <a href="/talks/">动态 <span aria-hidden="true">↗</span></a>
            <a href="/random/">随便翻翻 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>

        <a class="journal-portrait" href="/about/" aria-label="关于菲兹克斯喵">
          <img src="/images/Physics_nya.jpg" alt="菲兹克斯喵的头像" width="220" height="220" no-view />
          <span class="portrait-caption">physnya <span>北京 · 物理系在读</span></span>
        </a>
      </div>

      <div class="journal-colophon">
        <span>个人博客 &amp; 学习笔记</span>
        <span>Eclipse first, the rest nowhere.</span>
      </div>
    </section>
  </VPHomeBox>
</template>

<style scoped>
.home-journal {
  padding-top: 2.4rem;
  padding-bottom: 1rem;
}

.journal-cover {
  position: relative;
  padding: 0 clamp(1.2rem, 4vw, 3rem);
  border: 1px solid var(--paper-rule);
  background: var(--paper-surface);
  box-shadow: var(--paper-shadow), 5px 5px 0 -1px var(--paper-surface), 5px 5px 0 var(--paper-rule);
}

.journal-cover::before {
  position: absolute;
  top: -1px;
  right: 2.5rem;
  width: 1.1rem;
  height: 2.4rem;
  background: var(--paper-accent);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
  content: '';
}

.journal-masthead,
.journal-colophon {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.68rem;
}

.journal-masthead {
  padding: 1.1rem 1.8rem 1rem 0;
  border-bottom: 3px double var(--paper-rule);
  letter-spacing: 0.12em;
}

.journal-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
  padding: clamp(1.8rem, 4vw, 3rem) 0;
}

.journal-kicker {
  margin: 0 0 1.2rem;
  color: var(--paper-accent);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
}

h1 {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
  font-size: clamp(1.9rem, 4.8vw, 3.5rem);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.04em;
}

.journal-seal {
  padding: 0.3rem 0.2rem;
  border: 1px solid currentColor;
  color: var(--paper-accent);
  font-size: 0.68rem;
  line-height: 1.2;
  writing-mode: vertical-rl;
  transform: rotate(5deg);
}

.journal-subtitle {
  margin: 0.65rem 0 1.2rem;
  font-size: clamp(1.5rem, 3.2vw, 2.4rem);
  line-height: 1.2;
}

.journal-subtitle em {
  color: var(--paper-accent);
  font-weight: 400;
}

.journal-description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.9;
}

.journal-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1.2rem;
  margin-top: 1.5rem;
  font-size: 0.8rem;
}

.journal-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  min-height: 44px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 160ms, background-color 160ms;
}

.journal-actions a:hover {
    color: var(--vp-c-brand-1);
}

.journal-actions .journal-primary {
  padding: 0.45rem 1rem;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--paper-surface);
}

.journal-actions .journal-primary:hover {
    background: var(--vp-c-brand-2);
}

.journal-portrait {
  display: block;
  width: clamp(8rem, 20vw, 12rem);
  padding: 0.6rem 0.6rem 0;
  border: 1px solid var(--paper-rule);
  background: var(--paper-surface);
  box-shadow: 3px 5px 12px var(--paper-shadow-color);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transform: rotate(3deg);
  transition: transform 180ms;
}

.journal-portrait:hover {
    transform: rotate(0);
}

.journal-portrait img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  filter: saturate(0.8);
}

.portrait-caption {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.6rem 0 0.75rem;
  font-size: 1rem;
  font-style: italic;
  text-align: center;
}

.portrait-caption span {
    color: var(--vp-c-text-2);
    font-size: 0.68rem;
    font-style: normal;
}

.journal-colophon {
  padding: 0.85rem 0;
  border-top: 1px solid var(--paper-rule);
}

.journal-colophon > :last-child {
    font-style: italic;
}

@media (max-width: 639px) {
  .home-journal {
      padding-top: 1.2rem;
  }
  .journal-body {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.6rem;
  }
  .journal-portrait {
      width: 8rem;
      justify-self: end;
      margin-top: -0.4rem;
  }
  .journal-masthead {
      flex-direction: column;
      font-size: 0.65rem;
  }
  .journal-kicker {
      margin-bottom: 0.8rem;
  }
  .desktop-break {
      display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .journal-portrait, .journal-actions a {
      transition: none;
  }
}
</style>
