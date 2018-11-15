import { addComponent, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'Hello-World',
        displayName: 'Hello-World',
        fields: [{ name: 'title', type: CommonFieldTypes.SingleLineText }]
    });
};
