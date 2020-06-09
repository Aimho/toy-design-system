export interface ITransitionProps {
  /** The content of the component */
  children?: React.ReactElement<any, any>;
  /** true 인 경우, transition in */
  in?: boolean;
  /**
   * The duration for the transition, in milliseconds.
   *
   * You may specify a single timeout for all transitions, or individually with an object */
  timeout?: number | { enter?: number; exit?: number };
}
