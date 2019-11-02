import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ThemeSelector,
  ThemeProvider,
  PageConfigConsumer
} from "../commons/components/airDashboard";

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider initialStyle="light" initialColor="primary">
        <Layout sidebarSlim>
          {/* --------- Navbar ----------- */}
          <Layout.Navbar>
            <div></div>
          </Layout.Navbar>
          {/* -------- Sidebar ------------*/}
          <Layout.Sidebar>
            <div></div>
          </Layout.Sidebar>

          {/* -------- Content ------------*/}
          <Layout.Content>{children}</Layout.Content>

          {/* -- Theme Selector (DEMO) ----*/}
          <PageConfigConsumer>
            {({ sidebarHidden, navbarHidden }) => (
              <ThemeSelector styleDisabled={sidebarHidden && navbarHidden} />
            )}
          </PageConfigConsumer>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default AppLayout;
