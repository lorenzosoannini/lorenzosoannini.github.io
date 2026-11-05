# Lorenzo Soannini — portfolio

A buildless, responsive portfolio with subtle 16-bit details.

**Live site:** https://lorenzosoannini.github.io/ Source files and all runtime assets are in `dist/`; no build step, API key, analytics or third-party runtime is required.

## Preview

Run `python3 -m http.server 4173 --directory dist`, then open http://localhost:4173.

## Update

Edit `dist/index.html` for copy and links, `dist/styles.css` for design, and `dist/script.js` for the two small comparison interactions. Replace `dist/assets/Lorenzo-Soannini-CV.pdf` to update the CV. Deploy the contents of `dist/` on a static host.

## Visual sources and attribution

- EEG target/reconstruction previews: Lorenzo Soannini's cross-subject EEG-to-image thesis repository. These are selected historical thesis examples from held-out subject 10, not a new run of the public implementation. Evaluation context is linked and explained on the page.
- CT previews: matching slice 69 extracted from the original LiTS case 32 course animations (`liver_32.gif` and `result_small.gif`) in the synthetic-liver-tumor-segmentation repository. They demonstrate synthesis, not model predictions. The method adapts Hu et al., *Label-Free Liver Tumor Segmentation*, CVPR 2023; original attribution remains in the project repository.
- Stage poster/video: the actual recorded simulation in Lorenzo Soannini's LABIAGI_collision-avoidance repository.
- Bioinformatics entry: copy follows the original 33-slide Bioinformatics BRCA presentation, especially its gene/pathway interpretation (slides 23–32). The original KEGG UP enrichment plot is bundled from `tcga-brca-expression-analysis/docs/assets/kegg-up.png`; the presentation and repository are linked. This is exploratory analysis, not a diagnostic or survival model.
- VT323 typeface: Peter Hull, SIL Open Font License 1.1, preserved in `dist/assets/VT323-OFL.txt`.
- Decorative pixel mark and signal-to-image diagram: original SVG geometry for this portfolio.

The original project materials retain their respective rights. No blanket license is asserted for third-party images or research data. The public page lists a professional email, GitHub and LinkedIn; the downloadable CV includes its existing email and phone contact details.

## Publication

The public GitHub repository is `lorenzosoannini/lorenzosoannini.github.io`. GitHub Pages deploys `dist/` with the official Pages Actions workflow on each push to `main`. The social preview image is 1200 × 630 pixels; canonical URL, Open Graph metadata, robots.txt and sitemap.xml use the public GitHub Pages origin.
