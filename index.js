module.exports = function ( args ) {
    var result = {
        '_':[]
    };
 
    var value = args.join( ' ' );
    
    var reStr = /(-[^\s-](?:-\S+)?|--\S+)\s*([^\s-]*)?/g;
    
    var match;
    
    while( ( match = reStr.exec( value ) ) ) {
        var key = match[1].replace( /-/g,'' );
        match[2] = typeof match[2] === 'undefined' ? 'true' : match[2];
        if( key in result ) {
            if( Array.isArray(  result[key] ) ) {
                result[key].push( match[2] );
            }else{
                result[key] = [result[key] , match[2]];
            }
        }else{
            result[key] = match[2];
        }
    }
    var _value = value.replace( /-[^-\s]{2,}|--?\S+\s*[^-\s]*/g,'' )
    .replace( /\s*^\s*|\s+$/g,'' )
    .split( /\s+/ );
    
    result._ = result._.concat( _value );
    return result;
};
