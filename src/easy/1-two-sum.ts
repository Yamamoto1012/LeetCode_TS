
// export function twoSum (nums: number[], target:number): number[] {
//   const count = 0;
//   let i = 0;
//   let sum = 0
//   let array = [0, 0]
//   // 配列のi番目とi+1番目を足した値がtargetと同じの場合、結果を出力
//   while (count + i < nums.length) {
//     sum = nums[i] + nums[i+1]
//     if (sum === target) {
//       array = [i,i+1]
//     }
//     i += 1
//   }
//   return (
//     array
//   )
// }


export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      // 既に見た要素と合致すれば、そのインデックスとiを返す
      return [map.get(complement) as number, i];
    }
    // 見たことがない値はマップに登録
    map.set(nums[i],i)
  }
  return []
}