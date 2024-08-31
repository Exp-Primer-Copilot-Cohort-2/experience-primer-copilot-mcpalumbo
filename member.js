function skillsMember() {
  var skills = [];
  return {
    add: function(skill) {
      skills.push(skill);
    },
    remove: function(skill) {
      skills = skills.filter(function(s) {
        return s !== skill;
      });
    },
    get: function() {
      return skills;
    }
  };
}