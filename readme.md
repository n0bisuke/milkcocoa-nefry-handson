
## 準備

```
git clone https://github.com/n0bisuke/milkcocoa-nefry-handson.git
cd milkcocoa-nefry-handson
```

## step1

### 各ステップごとにブランチがあります

まずはステップ1にチェックアウトしましょう。

```
git checkout step1
```

サーバーを起動させましょう。

```
python -m SimpleHTTPServer
```

http://localhost:8000 にブラウザでアクセスすると以下のような状態になると思います。

### step1の結果

Web上のボタンを押すとLEDがチカチカします。

![](https://i.gyazo.com/a6e3fb25988251e50dae92f52a3409fb.gif)

### step2へ

問題なくいけたら次はstep2へ

```
git checkout step2
```

## step2

### step2ではMilkcocoaのドット絵とつなぎます。

リアルタイムに複数人で共同おえかきができる[ドット絵](https://mlkcca.com/sample.html)

### 記事をもとに進めて見ましょう。

https://dotstud.io/blog/milkcocoa-nefry-handson-vol1

### step2の結果

http://localhost:8000 にブラウザでアクセスして動作を確認しましょう。
同時に https://mlkcca.com/sample.html も開いてドット絵で色を塗るとLEDの色が変わることを確認してください。

![](https://i.gyazo.com/be69a5352b9e073ef7b75ee99bbf7bb9.gif)

### step3へ

問題なくいけたら次はstep3へ

```
git checkout step3
```