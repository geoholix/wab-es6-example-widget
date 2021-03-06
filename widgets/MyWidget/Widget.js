define([
    'dojo/_base/declare',
    'jimu/BaseWidget'
], (declare, BaseWidget) => {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
        baseClass: 'MyWidget',
        // add additional properties here

        //methods to communication with app container:
        postCreate() {
            this.inherited(arguments);
            console.log('MyWidget::postCreate');
        }
        // startup() {
        //   this.inherited(arguments);
        //   console.log('MyWidget::startup');
        // },
        // onOpen() {
        //   console.log('MyWidget::onOpen');
        // },
        // onClose(){
        //   console.log('MyWidget::onClose');
        // },
        // onMinimize(){
        //   console.log('MyWidget::onMinimize');
        // },
        // onMaximize(){
        //   console.log('MyWidget::onMaximize');
        // },
        // onSignIn(credential){
        //   console.log('MyWidget::onSignIn', credential);
        // },
        // onSignOut(){
        //   console.log('MyWidget::onSignOut');
        // }
        // onPositionChange(){
        //   console.log('MyWidget::onPositionChange');
        // },
        // resize(){
        //   console.log('MyWidget::resize');
        // }
        //methods to communication between widgets:
    });
});
