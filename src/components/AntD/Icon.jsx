import { CodepenOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Tooltip } from 'antd';
import React from 'react';


const Icon = () => {
    return (
        <div>
            <CodepenOutlined />
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Tooltip title="search">
                <Button size='large' type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Tooltip title="search">
                <Button loading={true} size='large' type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            
        </div>
    );
};

export default Icon;