import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: Boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render = () => {
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            Something went wrong, press <a href="/">f5</a> or reload your
            browser
          </h2>
        </div>
      );
    }
    return this.props.children;
  };
}
