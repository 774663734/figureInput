import React, {useState} from 'react';
import './index.css'

function TagsInput(props) {
    const [tags, setTags] = useState(props.tags);
    //通过过滤的方式删除数组
    const removeTags = indexToRemove => {
        setTags([...tags.filter((val, index) => index !== indexToRemove)]);
    };
    // 添加数组
    const addTags = (event) => {
        let eventVal = event.target.value;
        setTags([...tags, eventVal]);
        //更新父组件数组
        props.selectedTags([...tags, eventVal]);
        event.target.value = '';
    }
    console.log(props.tags);
    return (<div className='tags-input'>
        <ul id='tags'>
            {
                tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                              onClick={() => removeTags(index)}
                        >
							x
						</span>
                    </li>
                ))
            }
        </ul>
        <input
            type="text"
            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
            placeholder="按Enter键添加标签"
        />
    </div>)
}

export default TagsInput
