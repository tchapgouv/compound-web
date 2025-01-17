/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Text } from "./Text";

/**
 * @deprecated use `Text` instead
 */
export const Body: React.FC<React.ComponentProps<typeof Text>> = ({
  children,
  ...props
}) => {
  return <Text {...props}>{children}</Text>;
};
