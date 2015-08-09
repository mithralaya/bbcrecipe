/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var DateFormatter = function(){
    //private vars
    
    //setting public vars
    this.date = new Date();
    this.formattedDate = '';
};

DateFormatter.prototype = {
    
    getFormattedDate: function(date)
    {
        this.date = new Date(date);
        this.formattedDate = this.date.getFullYear()+'-';
        
        if(this.date.getMonth() < 9)
        {
            this.formattedDate += '0'+(this.date.getMonth()+1);
        }
        else
        {
            this.formattedDate += (this.date.getMonth()+1);
        }
        
        if(this.date.getDate() < 10)
        {
            this.formattedDate += '-0'+this.date.getDate();
        }
        else
        {
            this.formattedDate += '-'+this.date.getDate();
        }
        
        if(this.date.getHours() < 10)
        {
            this.formattedDate += ' 0'+(this.date.getHours());
        }
        else
        {
            this.formattedDate += ' '+this.date.getHours();
        }
        
        if(this.date.getMinutes() < 10)
        {
            this.formattedDate += ':0'+(this.date.getMinutes());
        }
        else
        {
            this.formattedDate += ':'+this.date.getMinutes();
        }
        if(this.date.getSeconds() < 10)
        {
            this.formattedDate += ':0'+this.date.getSeconds();
        }
        else
        {
            this.formattedDate += ':'+this.date.getSeconds();
        }
        return this.formattedDate;
    },
    convertDate: function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    },
    convertTime: function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getHours()), d.getUTCMinutes()].join(':');
    }
    
}



module.exports = new DateFormatter();