Configuring the scaffold is very similar to using [metalsmith-cli](https://github.com/segmentio/metalsmith#cli), but the big difference is still, that no CLI is used, everything is nicely available in a JavaScript API. 
Therefore much easier to deploy programmatically and output can be automatically tested.

### Configuration Options
The following options needs to be defined to get the project up and running:

#### Source

```json
source: "path/to/source"
```

Reference: [https://github.com/segmentio/metalsmith#sourcepath](https://github.com/segmentio/metalsmith#sourcepath)

#### Destination

```json
destination: "path/to/destination"
```

Reference: [https://github.com/segmentio/metalsmith#destinationpath](https://github.com/segmentio/metalsmith#destinationpath)
