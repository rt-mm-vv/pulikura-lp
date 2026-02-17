# classclass2021

専属プランナーが24時間サポートする背番号・背ネーム制作サービスのランディングページです。SASS を使用したスタイリング、Swiper.js によるスライダー機能、アコーディオン機能などを含む静的 Web サイトです。

## 📋 プロジェクト構成

```
class/
├── css/              # スタイルシート
│   ├── styles.scss   # メインのSCSSファイル
│   ├── _variables.scss # 変数定義
│   ├── reset.css     # リセットCSS
│   └── styles.css    # コンパイル後のCSS（自動生成）
├── js/               # JavaScriptファイル
│   ├── common.js     # 共通機能（画像保護、三角形の高さ設定など）
│   ├── slider.js     # Swiperスライダーの初期化
│   └── qa.js         # QAアコーディオン機能
├── img/              # 画像アセット
├── fonts/            # フォントファイル
├── movie/            # 動画ファイル
├── index.html        # メインHTMLファイル
└── package.json      # 依存関係とスクリプト
```

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. Sass のコンパイル

このプロジェクトは `sass` を `devDependencies` に含んでおり、npm scripts 経由でコンパイルします。

```bash
# 監視モード（開発用・ファイル変更時に自動コンパイル）
npm run dev

# 1回だけコンパイル
npm run sass

# 圧縮してビルド（本番用）
npm run build
```

**重要**:

- `styles.scss` → `styles.css` に出力されます（`styles.css.map` も生成されます）
- **CSS を直接編集せず**、基本は `styles.scss` / `_variables.scss` を編集してください

### 3. ブラウザで確認

静的ページなので、`index.html` をブラウザで開けば動作します。ローカル開発では VS Code の拡張機能（例: Live Server）などでホットリロードすると便利です。

## 🎨 主な機能

### ページセクション構成

- **Hero**: メインビジュアル、価格表示、PR情報
- **Intro**: サービス紹介セクション
- **Example**: 制作事例スライダー
- **Voice**: お客様の声スライダー
- **Flow**: 注文までの流れ
- **CTA**: 行動喚起セクション
- **QA**: よくある質問アコーディオン
- **Nav**: SNSフォロー用ナビゲーション

### スライダー機能（Swiper.js）

- **Example スライダー**: 制作事例を表示する自動再生スライダー（ループ、中央配置）
- **Voice スライダー**: お客様の声を表示するスライダー

設定は `js/slider.js` で管理されています。

### QA アコーディオン

- クリックで開閉
- キーボード操作対応（Enter/Space）
- アクセシビリティ対応（ARIA 属性）

実装は `js/qa.js` にあります。

### 共通機能（common.js）

- **画像保護機能**: 右クリック無効化、画像のドラッグ&ドロップ防止、画像の選択防止
- **開発者ツール無効化**: F12、Ctrl+Shift+I/C/J などのショートカットを無効化
- **その他のショートカット無効化**: Ctrl+S（保存）、Ctrl+P（印刷）、Ctrl+U（ソース表示）を無効化
- **三角形要素の高さ設定**: CSS変数を使用した動的な高さ設定

実装は `js/common.js` にあります。

## 📝 フォントについて

### Google Fonts（自動で読み込み）

`index.html` の `<link>` で読み込まれます。

- **M PLUS Rounded 1c** (400, 500, 800, 900)
- **Zen Kaku Gothic New** (400, 500, 700, 900)

### ローカルフォント（同梱）

- **07NikumaruFont**: `fonts/` 配下の `.otf` / `.ttf` を `styles.scss` の `@font-face` で読み込む設定済みです
- フォントを差し替える場合は、`fonts/` 内のファイル差し替え＋ `styles.scss` の `@font-face` を更新してください

## 🌐 デプロイ

### Vercel

`vercel.json` が設定済みです。Vercel にデプロイする場合：

```bash
# Vercel CLIを使用する場合
vercel

# または GitHubと連携して自動デプロイ
```

**設定内容**:
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `.`（ルート）
- ルーティング: すべてのパスを `index.html` にリライト

### その他のホスティングサービス

静的サイトとして動作するため、以下のサービスでもデプロイ可能です：
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

デプロイ前に `npm run build` を実行してCSSをコンパイルしてください。

## 🛠️ 開発時の注意事項

1. **SASS ファイルの編集**: `css/styles.scss` または `css/_variables.scss` を編集してください
2. **CSS ファイルの直接編集は避ける**: `css/styles.css` は自動生成されるため、直接編集しないでください
3. **画像パスの確認**: 画像は `img/` ディレクトリに配置し、HTML 内のパスを確認してください
4. **JavaScript の読み込み順序**: 
   - Swiper.js は CDN から読み込まれているため、`slider.js` より前に読み込まれていることを確認してください
   - `common.js` はページ全体の共通機能を含むため、他のスクリプトより先に読み込むことを推奨します
5. **画像の保護機能**: `common.js` で画像保護機能が実装されています。開発時は必要に応じて一時的に無効化してください
6. **動画ファイル**: `movie/` ディレクトリに動画ファイルが含まれています。ファイルサイズに注意してください

## 📦 依存関係

### 開発依存

- **sass**: ^1.69.0（SCSSコンパイル用）

### CDN経由で読み込まれるライブラリ

- **Swiper.js**: v11（スライダー機能）

### 外部フォント

- **Google Fonts**: M PLUS Rounded 1c、Zen Kaku Gothic New

## 📄 ライセンス

このプロジェクトのライセンス情報については、プロジェクトオーナーにご確認ください。
