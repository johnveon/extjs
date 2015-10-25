Ext.define('MyDesktop.ChartApp', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'Ext.form.field.HtmlEditor'
    ],
    id:'chartApp',
    init : function(){
        this.launcher = {
            text: 'chartApp',
            iconCls:'chartApp',
            handler : this.createWindow,
            scope: this
        }
    },
    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('chartApp');
        if(!win){
            win = desktop.createWindow({
                id: 'chartApp',
                title:'chartApp',
                width:600,
                height:400,
                iconCls: 'notepad',
                animCollapse:false,
                border: false,
                hideMode: 'offsets',
                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        id: 'notepad-editor',
                        value: [
                            '<b>����һ������</b>',
                            '�Զ��幦�ܳɹ���!'
                        ].join('')
                    }
                ]
            });
        }
        win.show();
        return win;
    }
});