import assert from "assert";
import Pattern from "../tensor";
import { transpose2d } from "../tensor";

import { arraysEqual } from "./helpers";


describe("Pattern", function() {
    it("Constructs correctly", function() {
      const data = Float32Array.from([1., 2., 3., 4., 5., 6., 7., 8., 9., 10., 11., 12.]);
      let pattern = new Pattern(data, [3, 2, 2]);
      // console.log(pattern)
      assert.ok(pattern.data.length == data.length);
      assert.ok(pattern.dims.length == 3);

      const dims = [1, 4, 3];
      const patternData = pattern.view(dims)
      pattern = new Pattern(patternData, dims);
      assert.ok(pattern.data.length == dims[0]*dims[1]*dims[2]);
    })
    it(".tensor() returns expected output with valid data", function() {
        const data = Float32Array.from([1., 2., 3., 4., 5., 6., 7., 8., 9., 10., 11., 12.]);
        const pattern = new Pattern(data, [3, 2, 2]);
        
        const expected = [[[1., 2.], [3., 4.]],
                            [[5., 6.], [7., 8.]], 
                            [[9., 10.], [11., 12.]]];
        const got = pattern.tensor();
        arraysEqual(expected, got);
    })
    it(".view() handles valid data correctly", function() {
        const data = Float32Array.from([1., 2., 3., 4., 5., 6., 7., 8., 9., 10., 11., 12.]);
        const pattern = new Pattern(data, [3, 2, 2]);
        
        let input = [3, 1, 4];
        let expected = [[[1., 2., 3., 4.]],
                            [[5., 6., 7., 8.]], 
                            [[9., 10., 11., 12.]]];
        let got = pattern.view(input);
        arraysEqual(expected, got); 
        
        input = [1, 3, 4];
        expected = [[[1., 2., 3., 4.],
                     [5., 6., 7., 8.],
                     [9., 10., 11., 12.]]];
        got = pattern.view(input);
        arraysEqual(expected, got);

    })
    it(".transpose() handles valid data correctly", function() {
        // const data = Float32Array.from([1., 2., 3., 4., 5., 6., 7., 8., 9., 10., 11., 12., 13., 14., ]);
        const dims = [2, 3, 4]
        const data = Float32Array.from({ length: dims[0]*dims[1]*dims[2] }, (_, k) => k + 1);
        const pattern = new Pattern(data, dims);

        const got = pattern.transpose();
        const expected = [[[1., 5., 9.], 
                        [2., 6., 10.],
                        [3., 7., 11.],
                        [4., 8., 12.]],
                        [[13., 17., 21.], 
                        [14., 18., 22.],
                        [15., 19., 22.],
                        [16., 20., 23.]]];
        arraysEqual(expected, got);
    })
    it(".concatenate() handles valid data correctly", function() {
        const dims = [2, 3, 1]
        const data = Float32Array.from({ length: dims[0]*dims[1]*dims[2] }, (_, k) => k + 1);
        const pattern = new Pattern(data, dims);
        const pattern2 = new Pattern(data, dims);

        let got = pattern.concatenate(pattern2, 0);
        let expected = [[[1.],[2.],[3.]],
                        [[4.],[5.],[6.]],
                        [[1.],[2.],[3.]],
                        [[4.],[5.],[6.]]];
        arraysEqual(got.tensor(), expected);

        got = pattern.concatenate(pattern2, 1);
        expected = [[[1.],[2.],[3.],[1.],[2.],[3.]], 
                    [[4.],[5.],[6.],[4.],[5.],[6.]]];
        arraysEqual(got.tensor(), expected);

        got = pattern.concatenate(pattern2, 2);
        expected = [[[1., 1.], [2., 2.], [3., 3.],
                     [4., 4.], [5., 5.], [6., 6.]]];
        arraysEqual(got.tensor(), expected);
    })
  })

describe("transpose2d", function() {
    it("handles 2d input correctly", function() {
        const input = [[1., 2., 3., 4.], 
                       [5., 6., 7., 8.],
                       [9., 10., 11., 12.]];
        const expected = [[1., 5., 9.], 
                          [2., 6., 10.],
                          [3., 7., 11.],
                          [4., 8., 12.]];
        const got = transpose2d(input);
        arraysEqual(got, expected);
    })
})