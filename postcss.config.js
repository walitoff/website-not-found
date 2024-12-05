import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default {
    plugins: [
        purgeCSSPlugin({
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
                const els = JSON.parse(content).htmlElements;
                return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
            },
            safelist: [
                "uk-tab",
                "uk-active",
            ],
        })
    ],
};
