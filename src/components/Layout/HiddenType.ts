export interface IHiddenProps extends TMaterialProps {}

export type TMaterialProps = {
  /** The content of the component */
  children: React.ReactNode;
  /** Hide the given breakpoint(s) */
  only?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | Array<"xs" | "sm" | "md" | "lg" | "xl">;
  /** true 인 경우 screens this size and down will be hidden */
  xlDown?: boolean;
  /** true 인 경우 screens this size and up will be hidden */
  xlUp?: boolean;
  /** true 인 경우 screens this size and down will be hidden */
  lgDown?: boolean;
  /** true 인 경우 screens this size and up will be hidden */
  lgUp?: boolean;
  /** true 인 경우 screens this size and down will be hidden */
  mdDown?: boolean;
  /** true 인 경우 screens this size and up will be hidden */
  mdUp?: boolean;
  /** true 인 경우 screens this size and down will be hidden */
  smDown?: boolean;
  /** true 인 경우 screens this size and up will be hidden */
  smUp?: boolean;
  /** true 인 경우 screens this size and down will be hidden */
  xsDown?: boolean;
  /** true 인 경우 screens this size and up will be hidden */
  xsUp?: boolean;
};
