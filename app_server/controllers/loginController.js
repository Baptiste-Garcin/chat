var app = require('../../app');

module.exports.login = function(req, res)
{

    res.status(200).json({success:true});
    // if(req.app.get('user').indexOf(req.body.name) === -1)
    // {
    //     req.app.get('user').push(req.body.name);
    //
    //     res.status(200).json({success:true});
    // }
    // else
    // {
    //     res.status(401).json({success:false});
    // }
};
