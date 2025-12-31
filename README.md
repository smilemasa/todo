# ToDo Application

このドキュメントでは、ToDoアプリケーションの概要、動作環境、セットアップ手順、および必要な設定について説明します。

## 概要

本アプリケーションは、Next.js (App Router) を使用して構築されたToDoリストアプリケーションです。
ユーザー認証にはNextAuthを使用し、タスクデータの保存にはGoogle Cloud Storage (GCS) を利用して、簡易的なDBとして機能させています。

### 主な機能

- **タスク管理**: タスクの作成、編集、削除、完了状態の管理。
- **認証機能**:
  - **Google認証**: Googleアカウントを使用してログインし、タスクをクラウドに保存・同期します。
  - **ゲストログイン**: アカウントなしで即座にアプリを試用できます（データは一時的）。
- **レスポンシブデザイン**: スマートフォン（iOS/Android）およびPCでの利用を想定したMaterial UIベースのデザイン。
- **PWA対応**: スマートフォンのホーム画面に追加することで、ネイティブアプリのように利用可能。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Material UI (MUI), Framer Motion
- **認証**: NextAuth.js (Google OAuthProvider)
- **データベース/ストレージ**: Google Cloud Storage (JSONファイルとして保存)
- **テスト**: Vitest

## 動作環境

本アプリケーションは、Google Cloud Run上で稼働しています。

- **本番環境URL**: [https://todo-628492178186.asia-northeast1.run.app/login](https://todo-628492178186.asia-northeast1.run.app/login)

### スマートフォンでの利用推奨

ブラウザのメニューから「ホーム画面に追加」を行うことで、アプリ感覚で使用することができます。

## ローカル開発環境のセットアップ

ローカルで開発・実行するための手順です。

### 前提条件

- **Node.js**: v18以上
- **npm**: パッケージ管理ツール

### 手順

1.  **リポジトリのクローン/移動**

    ```bash
    cd todo
    ```

2.  **依存関係のインストール**

    ```bash
    npm install
    ```

3.  **環境変数の設定**

    ゲストモードのみで動作確認を行う場合は設定不要ですが、Google認証やGCS連携をテストする場合は、ルートディレクトリに `.env.local` ファイルを作成し、以下の変数を設定してください。

    | 変数名                    | 説明                                                           |
    | :------------------------ | :------------------------------------------------------------- |
    | `GOOGLE_CLIENT_ID`        | Google OAuth クライアントID                                    |
    | `GOOGLE_CLIENT_SECRET`    | Google OAuth クライアントシークレット                          |
    | `NEXTAUTH_SECRET`         | NextAuth用シークレットキー (openssl rand -base64 32などで生成) |
    | `NEXTAUTH_URL`            | http://localhost:3000                                          |
    | `GCS_PROJECT_ID`          | Google Cloud プロジェクトID                                    |
    | `GCS_SERVICE_ACCOUNT_KEY` | GCSサービスアカウントキー (JSON文字列)                         |
    | `GCS_BUCKET_NAME`         | GCSバケット名                                                  |

4.  **開発サーバーの起動**

    ```bash
    npm run dev
    ```

5.  **動作確認**

    ブラウザで [http://localhost:3000/login](http://localhost:3000/login) にアクセスします。

## プロジェクト構成

- `app/`: Next.js App Routerのメインディレクトリ
- `feature/`: 機能ごとのコンポーネントやロジック
- `types/`: TypeScript型定義
- `lib/`: 汎用ユーティリティ関数など
- `public/`: 静的ファイル
- `test/`: テスト関連ファイル

## データ保存構造 (Google Cloud Storage)

ユーザーごとに「メールアドレス.json」というファイルを作成し、その中にタスク一覧をJSON配列として保存しています。

```json
[
  {
    "id": "uuid",
    "title": "タスク名",
    "description": "詳細",
    "priority": "high",
    "deadline": "YYYY-MM-DD",
    "completed": false,
    "createdAt": "ISOString",
    "subtasks": []
  }
]
```
