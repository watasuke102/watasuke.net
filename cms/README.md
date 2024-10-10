# cms - watasuke.net

Manage contents (article, profile)

Rust + Rocket + Juniper

## Directory structure

```
contents/
├── articles/
│  ├── 2022/
│  │  └── 00_test-2022/
│  │     └── article.md
│  └── 2023/
│     ├── 00_test-2023/
│     │  └── article.md
│     ├── _many-tags/
│     │  └── article.md
│     └── _not-published/
│        └── article.md
├── sitedata/
│  ├── profile.md
│  └── short-profile.md
└── tags.toml
```

`contents/articles/<year>/<index>_<slug>/article.md`, regex: `/^(?<index>[0-9]{2})?_(?<slug>[0-9a-z\-]+)/`

(ref: `usecase/article.rs@get_map_all`)
