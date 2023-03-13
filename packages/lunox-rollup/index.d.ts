import type { RollupOptions } from "rollup";
import type { LogLevel } from "esbuild";

declare const bundleTs: (
  file: string | string[],
  option?: Partial<{
    format: string;
    relative: string;
    outputDir: string;
    declaration: boolean;
    declarationOnly: boolean;
    logLevel: LogLevel;
    beforeBuild: RollupOptions["plugins"];
    afterBuild: RollupOptions["plugins"];
  }>
) => RollupOptions[];
