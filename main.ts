scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`Mercer Car`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 . . . . . . . . . 8 . . 
    . . 8 . . . . 2 2 2 . . . 8 . . 
    . . 8 8 8 8 . . 2 . 8 8 8 8 . . 
    . 2 2 2 2 8 8 8 2 8 8 8 8 8 2 . 
    . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
    . 2 2 8 2 2 . . . . 2 2 8 2 2 . 
    . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
    . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
