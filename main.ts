info.onLifeZero(function () {
	
})
info.setLife(3)
let burgario = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 f 4 4 4 4 f 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f . 2 2 2 f 2 7 2 2 2 2 2 2 . f 
    f . e e e e f f f f f e e e . f 
    f . e e e e e e e e e e e e . f 
    f . 4 4 4 4 4 4 4 4 4 4 4 4 . f 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . f f . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
