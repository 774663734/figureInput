import React from "react";
import TagsInput from './componet'
function TagsInputContainer() {
	//selectedTags更新后回调
	const selectedTagsRes = tags => {
		console.warn(tags);
	};
	return (<div>
		<TagsInput selectedTags={selectedTagsRes} tags={['React', 'Vue']} />
	</div>)
}
export default TagsInputContainer;
