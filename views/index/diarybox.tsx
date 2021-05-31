import React from 'react';
import { Panel } from 'primereact/panel';
import { Ripple } from 'primereact/ripple';
import * as S from './styles';

const Diarywriting = ({post}) => {
    const {id, userId,title,content}=post;
    return (
        <S.One_box>
        <Panel header={title}>
            <p>{content}</p>
        </Panel>
        </S.One_box>
    )
}




const Diarybox = ({posts}) => {
    console.log({posts})
    

    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} p-jc-start`;
        const titleClassName = `${options.titleClassName} p-pl-1`;

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
                <span className={titleClassName}>
                    Header
                </span>
            </div>
        )
    }

    return (
        <div>
            <Diarywriting post={posts}/>
        </div>
    )
}






export default Diarybox;