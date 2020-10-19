import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd';
import AppLayout from '../../components/layouts/AppLayout'

const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

function PostItem(props) {
    return (
        <AppLayout>
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                   {text}
                </Panel>
                <Panel header="This is panel header 2" key="2">
                   {text}
                </Panel>
                <Panel header="This is panel header 3" key="3">
                   {text}
                </Panel>
            </Collapse>
        </AppLayout>
    )
}

PostItem.propTypes = {

}

export default PostItem

