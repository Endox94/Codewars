function numBlocks(w, l, h) {
    let blocks = 0n;
    for (let i = 0n; i < h; i++){
      blocks += BigInt((w + i) * (l + i));
    }
    return blocks;
  }