---
title: Prueba de TikZ y Pseudocódigo
publish: true
---

## TikZ

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[->] (-1.5,0) -- (1.5,0) node[right] {$x$};
  \draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};
  \draw[thick, blue] (0,0) circle (1);
  \draw[red, thick] (0,0) -- (0.7071,0.7071) node[midway, above left] {$r$};
  \node at (0.4,0.12) {$\theta$};
\end{tikzpicture}
\end{document}
```

> [!theorem] **Diagrama conmutativo.**
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> A \arrow[r, "f"] \arrow[d, "g"'] & B \arrow[d, "h"] \\
> C \arrow[r, "k"'] & D
> \end{tikzcd}
> \end{document}
> ```

## Pseudocódigo

```pseudo
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$A, p, r$}
  \IF{$p < r$}
    \STATE $q = $ \CALL{Partition}{$A, p, r$}
    \STATE \CALL{Quicksort}{$A, p, q - 1$}
    \STATE \CALL{Quicksort}{$A, q + 1, r$}
  \ENDIF
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
```
