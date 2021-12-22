1. app

- state:
  - player1
  - player2
  - isReady
  - questions
  - startCountdown
- functions:
  - handlePlayerReady(:id)
  - handleEnableModal()
  ```
    if 2 players are ready => Start the game
  ```
  - getRandomQuestion() //return a question

2. <AreaPlayer/>
   Status
   Countdown (seconds)
   Button{start}
   => handleOnClick => disable button + onPlayerReady(playerId)

- props:
  - isReady
  - playerId

3. <Button />

4. <ModalQuestion/>5

- props:
  - question
  - onAccepted

5. <Countdown/>
   review f8

- props
  - amount: number
  - beforeCount: 'text'
  - start: (_isReady_)
  - fallback: onFinish
- if isStart => start count down
