// holy fuck this was annoying to write
function convertToCommentFace(anchor) {
	let container = {
		type: "element",
		tagName: "div",
		attributes: [
			{
				key: "class",
				value: "container"
			}
		],
		children: []
	}
	// img
	container.children.push({
		type: "element",
		tagName: "img",
		attributes: [
			{
				key: "src",
				value: facecodes[anchor.attributes[0].value] || '/faces/notfound.jpg'
			}
		]
	});
	// hovertext
	if (anchor.attributes[1].key == 'title') {
		container.children[0].attributes.push({
			key: "title",
			value: anchor.attributes[1].value
		});
	}
	// overlay text
	if (anchor.children.length > 0) {
		for (let i=0; i<anchor.children.length; i++) {
			// top text
			if (anchor.children[i].type == 'text') {
				container.children.push({
					type: 'element',
					tagName: 'div',
					attributes: [
						{
							key: 'class',
							value: 'top'
						}
					],
					chilrden: [
						{
							type: 'text',
							content: anchor.children[i].content
						}
					]
				});
			}
			// bottom text
			if (anchor.children[i].type == 'element' && anchor.children[i].tagName == 'strong') {
				container.children.push({
					type: 'element',
					tagName: 'div',
					attributes: [
						{
							key: 'class',
							value: 'bottom'
						}
					],
					children: [
						{
							type: 'text',
							content: anchor.children[i].children[0].content
						}
					]
				});
			}
		}
	}

	return container;
}

// searches recursively through markdown generated tags
function parseTags(json) {
	for (let i=0; i<json.length; i++) {
		if (json[i].tagName == 'a' && /#\S+/.test(json[i].attributes[0].value)) {
			if (json[i].tagName == 'a') {
				json[i] = convertToCommentFace(json[i]);
			} else {
				continue;
			}
		} else {
			if (json[i].children) {
				parseTags(json[i].children);
			}
			continue;
		}
	}
	return json;
}

// converts comment markdown to html
function parse(body) {
	let converter = new showdown.Converter({noHeaderId: true}),
		html = converter.makeHtml(body)
		json = window.himalaya.parse(html);

	json = parseTags(json);
	html = window.himalaya.stringify(json);
	return html;
}

// TODO: combine these functions into one

// attaches comment to feed
function attachComment(tmpl, obj, target) {
	target.prepend(tmpl
		.replace(/{{COMMENT_ID}}/g, obj._id)
		.replace(/{{COMMENT_LINK}}/g, obj.permalink)
		.replace(/{{COMMENT_AUTHOR}}/g, obj.author)
		.replace(/{{PARENT}}/g, obj.parentID)
		.replace(/{{COMMENT_BODY}}/g, parse(obj.body))
	);
}

// attaches thread announcement to feed
function attachThread(tmpl, obj, target) {
	target.prepend(tmpl
		.replace(/{{THREAD_LINK}}/g, obj.permalink)
		.replace(/{{THREAD_ID}}/g, obj.id)
	);
}
