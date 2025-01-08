# JavaScript Function with Unexpected NaN Handling

This repository demonstrates a subtle bug in a JavaScript function related to the handling of NaN (Not a Number) values. The function aims to return 0 if the input is null or undefined, but it unexpectedly passes through NaN without explicit handling.  This can lead to unexpected behavior and errors in applications relying on consistent return values.

## Bug Description
The function `foo` is designed to return 0 when the input `x` is null or undefined, and otherwise, it returns `x + 1`.  However, it does not explicitly handle NaN.  When NaN is passed as input, the function incorrectly returns NaN instead of a more appropriate value, potentially disrupting the application's logic.

## Bug Solution
The solution involves adding an explicit check for `isNaN(x)` and returning 0 in that case. This ensures consistent behavior across all scenarios, including null, undefined, and NaN inputs.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Run the code to observe the unexpected NaN output.
4. Open `bugSolution.js` to see the corrected function with NaN handling.