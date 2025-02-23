% podman-pod-start 1

## NAME

podman\-pod\-start - Start one or more pods

## SYNOPSIS

**podman pod start** [*options*] _pod_ ...

## DESCRIPTION

Start containers in one or more pods. You may use pod IDs or names as input. The pod must have a container attached
to be started.

## OPTIONS

#### **--all**, **-a**

Starts all pods

@@option latest

@@option pod-id-file.pod

## EXAMPLE

Start pod with a given name

```
podman pod start mywebserverpod
```

Start pods with given IDs

```
podman pod start 860a4b23 5421ab4
```

Start the latest pod created by Podman

```
podman pod start --latest
```

Start all pods

```
podman pod start --all
```

Start pod using ID specified in a given file

```
podman pod start --pod-id-file /path/to/id/file
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-pod(1)](commands/podman-pod/podman-pod.md)**, **[podman-pod-stop(1)](commands/podman-pod/podman-pod-stop.md)**

## HISTORY

July 2018, Adapted from podman start man page by Peter Hunt <pehunt@redhat.com>
