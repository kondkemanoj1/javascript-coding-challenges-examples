/* Program to find All permutations of arrays */

const permutations = (nums, arr = [], res = []) => {
  // recusrive base base
  if (nums.length === 0) res.push([...arr]);
  nums.forEach((num, i) => {
    let remianing = nums.filter((n, index) => i !== index);
    arr.push(nums[i]);
    permutations(remianing, arr, res);
    arr.pop();
  });

  return res;
};

console.log(permutations([1, 2, 3], [], []));
