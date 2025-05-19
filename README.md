# LeetCode TypeScript

LeetCodeの問題をTypeScriptで解くための自分用開発環境。
この環境を使いたい場合は、`tests`の中身と`src`の中身を削除してください。

## 開発環境

- Node.js
- TypeScript
- Vitest (テストフレームワーク)
- ts-node (TypeScript実行環境)

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# テストの実行
npm test
```

## 使い方

### 1. 問題ファイルの作成

`src`ディレクトリに問題のtsファイルを作成。

```typescript
// src/1-two-sum.ts
export const twoSum = (nums: number[], target: number): number[] => {
  // 実装
};
```

### 2. テストファイルの作成

`tests`ディレクトリに対応するテストファイルを作成。

```typescript
// tests/1-two-sum.test.ts
import { describe, it, expect } from 'vitest';
import { twoSum } from '../src/1-two-sum';

describe('Two Sum', () => {
  it('should return correct indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
```

### 3. テストの実行

```bash
# UIモードでテストを実行
npx vitest --ui

# ヘッドレスモードでテストを実行
npm test
```

## プロジェクト構造

```
.
├── src/          # 問題コード
├── tests/        # テストファイル
├── dist/         # コンパイル済みJavaScript
└── node_modules/ # 依存関係
```

## 命名規則

- ソリューション: `{問題番号}-{問題名}.ts`
  - 例: `1-two-sum.ts`
- テスト: `{問題番号}-{問題名}.test.ts`
  - 例: `1-two-sum.test.ts`

## 開発ツール

- `npm run dev`: 開発サーバーの起動
- `npm test`: テストの実行
- `npm run build`: TypeScriptのコンパイル

## 参考リンク

- [LeetCode](https://leetcode.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)

