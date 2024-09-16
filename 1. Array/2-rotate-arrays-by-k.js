// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
// Time Complexity - O(n)
function rotateArray(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);

  return nums;
}

// Optimised Approach
// Time Complexity -> O(n)
// Space Complexity -> O(1)
function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));
