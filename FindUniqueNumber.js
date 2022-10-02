function findUniq(arr) {
    if (arr[0] == arr[1]){
      return Number(arr.filter(x => x != arr[0]).join());
    } else if (arr[0] == arr[arr.length - 1]){
      return Number(arr.filter(x => x != arr[0]).join());
    } else {
      return Number(arr.filter(x => x != arr[arr.length-1]).join());
    }
  }