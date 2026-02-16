module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/npm",
            {
                pkgRoot: "packages/ui"
            }
        ],
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                assets: ["packages/ui/package.json"],
                message: "chore(release): ${nextRelease.version}"
            }
        ]
    ]
};
