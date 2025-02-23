% podman-diff 1

## NAME

podman\-diff - Inspect changes on a container or image's filesystem

## SYNOPSIS

**podman diff** [*options*] _container|image_ [*container|image*]

## DESCRIPTION

Displays changes on a container or image's filesystem. The container or image will be compared to its parent layer or the second argument when given.

The output is prefixed with the following symbols:

| Symbol | Description                      |
| ------ | -------------------------------- |
| A      | A file or directory was added.   |
| D      | A file or directory was deleted. |
| C      | A file or directory was changed. |

## OPTIONS

#### **--format**

Alter the output into a different format. The only valid format for **podman diff** is `json`.

@@option latest

## EXAMPLE

```
$ podman diff container1
A /myscript.sh
```

```
$ podman diff --format json myimage
{
  "changed": [
    "/usr",
    "/usr/local",
    "/usr/local/bin"
  ],
  "added": [
    "/usr/local/bin/docker-entrypoint.sh"
  ]
}
```

```
$ podman diff container1 image1
A /test
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-container-diff(1)](commands/podman-container/podman-container-diff.md)**, **[podman-image-diff(1)](commands/podman-image/podman-image-diff.md)**

## HISTORY

August 2017, Originally compiled by Ryan Cole <rycole@redhat.com>
