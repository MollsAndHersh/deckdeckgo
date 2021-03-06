# Notes

Notes can be added to any slides. For such purpose, use the related slot `notes` to the particular slide you wish to comment.

Your notes are going to be automatically `displayed` in the [remote control](https://deckdeckgo.app).

```
<deckgo-deck>
  <deckgo-slide-title>
    <h1 slot="title">My presentation title</h1>
    <div slot="notes">A note regarding this particular slide</div>

And another note on a new line about it too.
  </deckgo-slide-title>
</deckgo-deck>
```

## Publishing Notes

If you are using the [DeckDeckGo] starter kit and wish to make your notes accessible to anyone, you will need to mark them with the attribute `show`.

```
<deckgo-deck>
  <deckgo-slide-title>
    <h1 slot="title">My presentation title</h1>
    <div slot="notes" show>A note displayed in the presentation within a modal accessible for anyone</div>
  </deckgo-slide-title>
</deckgo-deck>
```

## Markdown

The [remote control](https://deckdeckgo.app) supports Markdown for your notes too.

[deckdeckgo]: https://deckdeckgo.com
