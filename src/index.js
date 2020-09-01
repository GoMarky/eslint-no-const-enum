module.exports = {
  rules: {
    "no-const-enum": {
      create: function(context) {
        return {
          TemplateLiteral(node) {
            context.report(node, 'Do not use template literals');
            
            console.log(node);
          }
        };
      }
    }
  }
};
