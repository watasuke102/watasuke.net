// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {ExtractHeading} from '@watasuke.net/common/src/ExtractHeading';

// wrap ExtractHeading() for gatsby-node.ts
// get md text from stdin
(async () => {
  // top-level async does not work
  try {
    const buffers: Buffer[] = [];
    for await (const e of process.stdin) buffers.push(e);
    const input = buffers.concat().toString();
    const result = ExtractHeading(input);
    console.info(JSON.stringify(result));
  } catch (e) {
    console.error(e);
  }
})();
