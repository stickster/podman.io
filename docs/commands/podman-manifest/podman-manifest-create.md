% podman-manifest-create 1

## NAME

podman\-manifest\-create - Create a manifest list or image index

## SYNOPSIS

**podman manifest create** [*options*] _listnameorindexname_ [*imagename* ...]

## DESCRIPTION

Creates a new manifest list and stores it as an image in local storage using
the specified name.

If additional images are specified, they are added to the newly-created list or
index.

## OPTIONS

#### **--all**

If any of the images which should be added to the new list or index are
themselves lists or indexes, add all of their contents. By default, only one
image from such a list will be added to the newly-created list or index.

#### **--amend**, **-a**

If a manifest list named _listnameorindexname_ already exists, modify the
preexisting list instead of exiting with an error. The contents of
_listnameorindexname_ are not modified if no *imagename*s are given.

@@option tls-verify

## EXAMPLES

```
podman manifest create mylist:v11
9cfd24048d5fc80903f088f1531a21bff01172abe66effa8941a4c2308dc745f
podman manifest create --amend mylist:v11
9cfd24048d5fc80903f088f1531a21bff01172abe66effa8941a4c2308dc745f
```

```
podman manifest create mylist:v11 docker://fedora
5c2bc76bfb4ba6665a7973f7e1c05ee0536b4580637f27adc9fa5a4b2bc03cf1
```

```
podman manifest create --all mylist:v11 docker://fedora
30330571e79c65288a4fca421d9aed29b0210d57294d9c2056743fdcf6e3967b
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-manifest(1)](commands/podman-manifest/podman-manifest.md)**
