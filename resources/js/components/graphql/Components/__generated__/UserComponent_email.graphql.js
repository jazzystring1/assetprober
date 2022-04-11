/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserComponent_email$ref: FragmentReference;
declare export opaque type UserComponent_email$fragmentType: UserComponent_email$ref;
export type UserComponent_email = {|
  +email: string,
  +$refType: UserComponent_email$ref,
|};
export type UserComponent_email$data = UserComponent_email;
export type UserComponent_email$key = {
  +$data?: UserComponent_email$data,
  +$fragmentRefs: UserComponent_email$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_email",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3c94a4c4a424d154043bddeeb61ffec3';

module.exports = node;
