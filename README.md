## 環境

- ビルドツールとして Vite を使用

## 使い方

localhost の起動とファイルの変更監視

```sh
$ yarn dev
```

本番環境用にファイルを build

```sh
$ yarn build
```

本番環境用に build したファイルをプレビューできる静的サーバーを起動

事前に`yarn build`を実行しておく必要があります

```sh
$ yarn preview
```
