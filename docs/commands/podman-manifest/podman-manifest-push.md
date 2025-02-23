% podman-manifest-push 1

## NAME

podman\-manifest\-push - Push a manifest list or image index to a registry

## SYNOPSIS

**podman manifest push** [*options*] _listnameorindexname_ [*destination*]

## DESCRIPTION

Pushes a manifest list or image index to a registry.

## RETURN VALUE

The list image's ID and the digest of the image's manifest.

## OPTIONS

#### **--all**

Push the images mentioned in the manifest list or image index, in addition to
the list or index itself. (Default true)

@@option authfile

@@option cert-dir

@@option compression-format

@@option creds

@@option digestfile

#### **--format**, **-f**=_format_

Manifest list type (oci or v2s2) to use when pushing the list (default is oci).

#### **--quiet**, **-q**

When writing the manifest, suppress progress output

#### **--remove-signatures**

Don't copy signatures when pushing images.

#### **--rm**

Delete the manifest list or image index from local storage if pushing succeeds.

#### **--sign-by**=_fingerprint_

Sign the pushed images with a “simple signing” signature using the specified key. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--sign-by-sigstore**=\*param-file\*\*\*

Add a sigstore signature based on further options specified in a containers sigstore signing parameter file _param-file_.
See containers-sigstore-signing-params.yaml(5) for details about the file format.

#### **--sign-by-sigstore-private-key**=_path_

Sign the pushed images with a sigstore signature using a private key at the specified path. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

@@option sign-passphrase-file

@@option tls-verify

## DESTINATION

The DESTINATION is a location to store container images
The Image "DESTINATION" uses a "transport":"details" format.
If a transport is not given, podman push will attempt to push
to a registry.

Multiple transports are supported:

**dir:**_path_
An existing local directory _path_ storing the manifest, layer tarballs and signatures as individual files. This is a non-standardized format, primarily useful for debugging or noninvasive container inspection.

    $ podman manifest push mylist:v11 dir:/tmp/mylist

**docker://**_docker-reference_
An image in a registry implementing the "Docker Registry HTTP API V2". By default, uses the authorization state in `$XDG_RUNTIME_DIR/containers/auth.json`, which is set using `(commands/podman login)`. If the authorization state is not found there, `$HOME/.docker/config.json` is checked, which is set using `(docker login)`.

    $ podman manifest push mylist:v11 docker://registry.example.org/mylist:v11

**docker-archive:**_path_[**:**_docker-reference_]
An image is stored in the `docker save` formatted file. _docker-reference_ is only used when creating such a file, and it must not contain a digest.

    $ podman manifest push mylist:v11 docker-archive:/tmp/mylist

**docker-daemon:**_docker-reference_
An image in _docker-reference_ format stored in the docker daemon internal storage. _docker-reference_ must contain a tag.

    $ podman manifest push mylist:v11 docker-daemon:registry.example.org/mylist:v11

**oci-archive:**_path_**:**_tag_
An image _tag_ in a directory compliant with "Open Container Image Layout Specification" at _path_.

    $ podman manifest push mylist:v11 oci-archive:/tmp/mylist

## EXAMPLE

```
podman manifest push mylist:v11 docker://registry.example.org/mylist:v11
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-manifest(1)](commands/podman-manifest/podman-manifest.md)**
