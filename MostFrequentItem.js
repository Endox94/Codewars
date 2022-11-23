function mostFrequentItemCount(collection) {
    let max = 0;
    for (let i = 0; i < collection.length; i++){
      if (collection.filter((x => x == collection[i])).length > max){
        max = collection.filter((x => x == collection[i])).length;
      }
    }
    return max;
  }